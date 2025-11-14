// Define an interface for the drawing options
interface WhiteboardOptions {
	color?: string;
	size?: number;
	linejoin?: "miter" | "round" | "bevel";
	linecap?: "butt" | "round" | "square";
}

// Define the shape of the action for the undo/redo stack
// (Matching the { type, line } structure from your example)
enum ActionType {
	Line,
}

interface DrawAction {
	type: ActionType;
	line: SVGPathElement;
}

/**
 * A vanilla TypeScript class to enable freehand drawing on an SVG element,
 * replicating the D3 drag-and-smooth-line functionality.
 */
export class VanillaWhiteboard {
	private svg: SVGSVGElement;
	private options: Required<WhiteboardOptions>; // Fully populated options

	// --- State Properties ---
	private isDrawing = false;
	private currentPoints: [number, number][] = [];
	private activePath: SVGPathElement | null = null;

	// --- Undo/Redo Stacks ---
	public undoStack: DrawAction[] = [];
	public redoStack: DrawAction[] = [];

	// --- Default Options ---
	private static defaultOptions: Required<WhiteboardOptions> = {
		color: "#FF0000",
		size: 8,
		linejoin: "round",
		linecap: "round",
	};

	/**
	 * Initializes the whiteboard on a given SVG selector.
	 * @param selector A CSS selector for the <svg> element.
	 * @param options Optional configuration for line styles.
	 */
	constructor(selector: string, options?: WhiteboardOptions) {
		const element = document.querySelector(selector);

		if (!element) {
			throw new Error(
				`[VanillaWhiteboard] Element not found for selector: ${selector}`,
			);
		}
		if (!(element instanceof SVGSVGElement)) {
			throw new Error(
				`[VanillaWhiteboard] Selector must target an <svg> element.`,
			);
		}

		this.svg = element;

		// Merge user options with defaults
		this.options = { ...VanillaWhiteboard.defaultOptions, ...options };

		// Add the primary event listener to start drawing
		this.svg.addEventListener("mousedown", this.handleMouseDown);

		// Note: The original D3 code had an `init.emit()`.
		// This is where you would put a similar callback if needed.
		// console.log('[VanillaWhiteboard] Initialized.');
	}

	// #region --- Public API ---

	/**
	 * Updates the drawing options.
	 */
	public setOptions(options: WhiteboardOptions) {
		this.options = { ...this.options, ...options };
	}

	/**
	 * Undoes the last drawn line.
	 */
	public undo() {
		const lastAction = this.undoStack.pop();
		if (lastAction) {
			this.svg.removeChild(lastAction.line);
			this.redoStack.push(lastAction);
		}
	}

	/**
	 * Redoes the last undone line.
	 */
	public redo() {
		const lastRedo = this.redoStack.pop();
		if (lastRedo) {
			this.svg.appendChild(lastRedo.line);
			this.undoStack.push(lastRedo);
		}
	}

	/**
	 * Clears all drawings from the SVG.
	 */
	public clear() {
		// Remove all path elements that were drawn
		this.undoStack.forEach((action) =>
			this.svg.removeChild(action.line),
		);
		this.redoStack.forEach((action) => {
			try {
				this.svg.removeChild(action.line);
			} catch (e) {
				// Ignore errors if element was already removed
			}
		});

		// Clear stacks
		this.undoStack = [];
		this.redoStack = [];
	}

	/**
	 * Removes event listeners to clean up the instance.
	 */
	public destroy() {
		this.svg.removeEventListener("mousedown", this.handleMouseDown);
		// Just in case, remove global listeners if they are somehow stuck
		document.removeEventListener("mousemove", this.handleMouseMove);
		document.removeEventListener("mouseup", this.handleMouseUp);
	}

	// #endregion

	// #region --- Event Handlers ---

	/**
	 * Handles the 'mousedown' event on the SVG.
	 * This is the "start" of the D3 drag behavior.
	 */
	private handleMouseDown = (event: MouseEvent) => {
		// Only start drawing on left-click
		if (event.button !== 0) return;

		event.preventDefault();
		this.isDrawing = true;

		// Clear redo stack on new action
		// This matches the logic `if (this.undoStack.length < 1) { this.redoStack = []; }`
		// but is more robustly placed at the *start* of a new action.
		this.redoStack = [];

		// Get starting point
		const startPoint = this.getMousePosition(event);
		this.currentPoints = [startPoint];

		// Create the new <path> element
		this.activePath = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);

		// Set styles from options
		// This replaces the .attr('style', `...`) block
		const style = `
      fill: none;
      stroke: ${this.options.color};
      stroke-width: ${this.options.size}px;
      stroke-linejoin: ${this.options.linejoin};
      stroke-linecap: ${this.options.linecap};
    `;
		this.activePath.setAttribute("style", style);
		this.activePath.setAttribute("class", "line"); // From your example

		// Calculate initial path data (just a "Move")
		const pathData = this.createSmoothPath(this.currentPoints);
		this.activePath.setAttribute("d", pathData);

		// Add the path to the SVG
		this.svg.appendChild(this.activePath);

		// Add global listeners for 'drag' and 'end'
		document.addEventListener("mousemove", this.handleMouseMove);
		document.addEventListener("mouseup", this.handleMouseUp);
	};

	/**
	 * Handles the 'mousemove' event on the document.
	 * This is the "drag" of the D3 drag behavior.
	 */
	private handleMouseMove = (event: MouseEvent) => {
		if (!this.isDrawing || !this.activePath) return;

		event.preventDefault();

		// Get new point and add it to our list
		const newPoint = this.getMousePosition(event);
		this.currentPoints.push(newPoint);

		// Recalculate the entire path string
		const pathData = this.createSmoothPath(this.currentPoints);

		// Update the 'd' attribute
		this.activePath.setAttribute("d", pathData);
	};

	/**
	 * Handles the 'mouseup' event on the document.
	 * This is the "end" of the D3 drag behavior.
	 */
	private handleMouseUp = () => {
		if (!this.isDrawing) return;

		this.isDrawing = false;

		// Do one final path update (can simplify the path)
		// You could add a path simplification step here if desired
		if (this.activePath) {
			const finalPoints = this.currentPoints; // or simplifiedPoints
			this.activePath.setAttribute(
				"d",
				this.createSmoothPath(finalPoints),
			);

			// Push the completed action to the undo stack
			this.undoStack.push({
				type: ActionType.Line,
				line: this.activePath,
			});
		}

		// Clear active state
		this.activePath = null;
		this.currentPoints = [];

		// Clean up global listeners
		document.removeEventListener("mousemove", this.handleMouseMove);
		document.removeEventListener("mouseup", this.handleMouseUp);
	};

	// #endregion

	// #region --- Helper Functions ---

	/**
	 * Gets the mouse (x, y) coordinates relative to the SVG element.
	 * Replaces D3's `mouse(this)`.
	 */
	private getMousePosition(event: MouseEvent): [number, number] {
		const rect = this.svg.getBoundingClientRect();

		// Fallback for SVGs without a viewBox
		return [event.clientX - rect.left, event.clientY - rect.top];
	}

	/**
	 * Creates an SVG path data string from an array of points.
	 * This function replaces `d3.line().curve(curveBasis)`.
	 * It uses a quadratic Bézier curve chain based on midpoints.
	 */
	private createSmoothPath(points: [number, number][]): string {
		let path = "";
		const len = points.length;

		if (len < 1) {
			return "";
		}

		// Start path at the first point
		path += `M ${points[0][0]} ${points[0][1]}`;

		if (len === 1) {
			// Just a single point (draw a dot)
			path += ` L ${points[0][0]} ${points[0][1]}`;
			return path;
		}

		if (len === 2) {
			// Straight line
			path += ` L ${points[1][0]} ${points[1][1]}`;
			return path;
		}

		// This is the core smoothing logic
		// We create a chain of quadratic Bezier curves.
		// The curve goes from midpoint to midpoint,
		// using the original point as the control point.

		// Calculate the first midpoint
		let midPoint = [
			(points[0][0] + points[1][0]) / 2,
			(points[0][1] + points[1][1]) / 2,
		];

		// Start by drawing a line to the first midpoint
		path += ` L ${midPoint[0]} ${midPoint[1]}`;

		for (let i = 1; i < len - 1; i++) {
			const p1 = points[i];
			const p2 = points[i + 1];

			// Calculate the next midpoint
			const nextMidPoint = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];

			// Draw quadratic Bezier curve
			// Control point is p1, destination is nextMidPoint
			path += ` Q ${p1[0]} ${p1[1]} ${nextMidPoint[0]} ${nextMidPoint[1]}`;

			midPoint = nextMidPoint;
		}

		// Draw a final line from the last midpoint to the last point
		const lastPoint = points[len - 1];
		path += ` L ${lastPoint[0]} ${lastPoint[1]}`;

		return path;
	}

	// #endregion
}