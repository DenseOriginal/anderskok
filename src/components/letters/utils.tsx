export const getRandomFillColor = (): string => {
    const colors = [
        "#EA5455",
		"#F07B3F",
		"#FFD460",
		"#34CB64",
		'#36AFE3',
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]!
}

export const getNonRepeatingRandomFillColors = (numColors: number) => {
    const colors: string[] = []
    while (colors.length < numColors) {
        const randomColor = getRandomFillColor()
        if (!colors.includes(randomColor)) {
            colors.push(randomColor)
        }
    }
    return colors
}