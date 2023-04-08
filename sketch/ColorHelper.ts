class ColorHelper {

    public static customColors() {
        return [
            [
                color(255, 211, 188),
                color(255, 227, 209),
                color(242, 218, 227),
                color(203, 213, 225),
                color(182, 224, 220),
            ],
            [
                color(1, 51, 100),
                color(334, 59, 90),
                color(263, 58, 92),
                color(200, 60, 90),
                color(103, 58, 93)
            ]
        ];
    }

    public static pasteleColors() {
        return [
            // Soft Pastels
            [color(242, 192, 191), color(201, 209, 211), color(244, 229, 203), color(234, 212, 203), color(192, 193, 193)],

            // Springtime
            [color(176, 224, 230), color(240, 230, 140), color(135, 206, 250), color(152, 251, 152), color(255, 218, 185)],

            // Beach Day
            [color(248, 236, 194), color(195, 226, 183), color(157, 193, 187), color(244, 180, 180), color(239, 239, 239)],

            // Ice Cream
            [color(255, 229, 180), color(231, 241, 193), color(199, 206, 234), color(247, 178, 178), color(198, 210, 198)],

            // Soft Hues
            [color(247, 202, 201), color(146, 168, 209), color(166, 231, 240), color(247, 231, 206), color(231, 167, 206)]
        ];
    }

    public static getRandomColorsPalette(total: number): p5.Color[] {
        const colors = new Array<p5.Color>();
        let baseColorArray: p5.Color[] = random(ColorHelper.customColors());

        const originalColorArray = new Array<p5.Color>();
        for (var i = 0; i < baseColorArray.length; i++) {
            originalColorArray.push(baseColorArray[i])
        }

        if (total <= baseColorArray.length) {
            for (var i = 0; i < total; i++) {
                const iColor = floor(random(0, baseColorArray.length))
                colors.push(baseColorArray[iColor])
                baseColorArray.splice(iColor, 1)
            }
        } else {
            for (var i = 0; i < total; i++) {
                const iColor = floor(random(0, baseColorArray.length))
                colors.push(baseColorArray[iColor])
                // renew Array if empty
                if (baseColorArray.length > 1) {
                    baseColorArray.splice(iColor, 1)
                } else {
                    colors.push(random(originalColorArray))
                }
            }
        }

        return colors;
    }
    
    public static getRandomPasteleColorsPalette(total: number): p5.Color[] {
        const colors = new Array<p5.Color>();
        let baseColorArray: p5.Color[] = random(ColorHelper.pasteleColors());

        const originalColorArray = new Array<p5.Color>();
        for (var i = 0; i < baseColorArray.length; i++) {
            originalColorArray.push(baseColorArray[i])
        }

        if (total <= baseColorArray.length) {
            for (var i = 0; i < total; i++) {
                const iColor = floor(random(0, baseColorArray.length))
                colors.push(baseColorArray[iColor])
                baseColorArray.splice(iColor, 1)
            }
        } else {
            for (var i = 0; i < total; i++) {
                const iColor = floor(random(0, baseColorArray.length))
                colors.push(baseColorArray[iColor])
                // renew Array if empty
                if (baseColorArray.length > 1) {
                    baseColorArray.splice(iColor, 1)
                } else {
                    colors.push(random(originalColorArray))
                }
            }
        }

        return colors;
    }
}