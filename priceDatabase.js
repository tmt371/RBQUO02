// Use an IIFE to avoid polluting the global scope
(function () {
    'use strict';

    // Create a PriceDatabase class to encapsulate all the functionality
    class PriceDatabase {
        constructor() {
            this.sunsetTable = [
                [59, 65, 71, 77, 83, 89, 95, 118, 124, 131, 138, 145, 151],
                [60, 67, 73, 80, 86, 93, 99, 123, 130, 137, 144, 152, 159],
                [62, 69, 76, 83, 90, 97, 104, 128, 135, 143, 151, 159, 166],
                [65, 72, 80, 87, 95, 102, 110, 134, 142, 150, 159, 167, 175],
                [66, 74, 82, 90, 98, 106, 114, 139, 148, 156, 165, 174, 183],
                [69, 77, 86, 94, 103, 111, 120, 145, 154, 164, 173, 182, 191],
                [70, 79, 88, 97, 106, 115, 124, 150, 160, 170, 179, 189, 199],
                [73, 83, 92, 102, 111, 121, 130, 156, 166, 177, 187, 197, 207],
                [75, 85, 95, 105, 115, 125, 135, 161, 172, 183, 193, 204, 215],
                [76, 87, 97, 108, 118, 129, 139, 166, 177, 189, 200, 211, 222],
                [79, 90, 101, 112, 123, 134, 145, 172, 184, 196, 207, 219, 231],
                [81, 92, 103, 115, 126, 138, 149, 177, 190, 202, 214, 226, 238],
                [83, 95, 107, 119, 131, 143, 155, 184, 196, 209, 222, 234, 247],
                [85, 97, 110, 122, 135, 147, 160, 189, 202, 215, 228, 241, 254],
                [86, 99, 112, 125, 138, 151, 164, 194, 207, 221, 235, 248, 262],
            ];

            this.univiewTable = [
                [66, 73, 81, 88, 96, 104, 111, 136, 145, 153, 161, 169, 178],
                [68, 76, 84, 93, 101, 109, 117, 143, 152, 161, 170, 179, 188],
                [70, 79, 88, 97, 106, 115, 123, 150, 160, 169, 179, 189, 198],
                [74, 83, 93, 102, 112, 121, 131, 158, 168, 179, 189, 199, 210],
                [76, 86, 96, 106, 117, 127, 137, 165, 176, 187, 198, 209, 220],
                [79, 90, 101, 112, 123, 134, 145, 173, 185, 196, 208, 220, 231],
                [81, 93, 104, 116, 128, 139, 151, 180, 192, 205, 217, 229, 242],
                [85, 97, 109, 121, 134, 146, 158, 188, 201, 214, 227, 240, 253],
                [87, 100, 113, 125, 138, 151, 164, 195, 209, 222, 236, 250, 263],
                [89, 102, 116, 130, 143, 157, 170, 202, 216, 230, 245, 259, 273],
                [92, 106, 121, 135, 149, 164, 178, 210, 225, 240, 255, 270, 285],
                [94, 109, 124, 139, 154, 169, 184, 217, 232, 248, 264, 279, 295],
                [98, 113, 129, 145, 160, 176, 191, 225, 241, 257, 274, 290, 307],
                [100, 116, 132, 149, 165, 181, 198, 232, 249, 266, 283, 300, 317],
                [102, 119, 136, 153, 170, 187, 204, 238, 256, 274, 292, 309, 327],
            ];

            this.wilsonTable = [
                [69, 78, 88, 97, 106, 116, 125, 151, 185, 188, 191, 194],
                [72, 82, 93, 103, 113, 124, 134, 161, 199, 202, 205, 208],
                [75, 86, 98, 109, 120, 132, 143, 171, 213, 216, 219, 222],
                [79, 91, 104, 116, 128, 141, 153, 182, 228, 231, 234, 237],
                [82, 95, 109, 122, 135, 149, 162, 192, 242, 245, 248, 251],
                [86, 100, 115, 129, 143, 158, 172, 202, 257, 260, 263, 267],
                [89, 105, 120, 135, 150, 166, 181, 212, 271, 274, 277, 281],
                [93, 110, 126, 142, 158, 174, 191, 223, 286, 290, 293, 296],
                [96, 114, 131, 148, 165, 182, 200, 233, 300, 304, 307, 310],
                [99, 118, 136, 154, 172, 190, 208, 243, 314, 318, 321, 324],
                [104, 123, 142, 161, 180, 199, 218, 254, 330, 333, 336, 339],
                [107, 127, 147, 167, 187, 207, 227, 264, 344, 347, 350, 353],
                [111, 132, 153, 174, 195, 216, 237, 274, 359, 362, 365, 368],
                [114, 136, 158, 180, 202, 224, 246, 284, 373, 376, 379, 382],
                [117, 140, 163, 186, 209, 232, 255, 294, 387, 390, 393, 396],
            ];

            this.sunsetUniviewWidthRanges = [630, 830, 1030, 1230, 1430, 1630, 1830, 2030, 2230, 2430, 2630, 2830, 3030];
            this.wilsonWidthRanges = [630, 830, 1030, 1230, 1430, 1630, 1830, 2030, 2230, 2430, 2630, 2930];
            this.heightRanges = [900, 1050, 1200, 1350, 1500, 1650, 1800, 1950, 2100, 2250, 2400, 2550, 2700, 2850, 3000];
        }

        findNextRange(input, ranges) {
            if (typeof input !== 'number' || isNaN(input)) {
                throw new Error('Input must be a valid number');
            }

            for (let i = 0; i < ranges.length; i++) {
                if (input <= ranges[i]) {
                    return { value: ranges[i], index: i };
                }
            }
            return null;
        }

        getPrice(width, height, tableType) {
            if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
                throw new Error('Width and height must be valid numbers');
            }

            let priceTable, widthRanges;
            switch (tableType.toLowerCase()) {
                case 'sunset':
                    priceTable = this.sunsetTable;
                    widthRanges = this.sunsetUniviewWidthRanges;
                    break;
                case 'uniview':
                    priceTable = this.univiewTable;
                    widthRanges = this.sunsetUniviewWidthRanges;
                    break;
                case 'wilson':
                    priceTable = this.wilsonTable;
                    widthRanges = this.wilsonWidthRanges;
                    break;
                default:
                    throw new Error('Invalid table type');
            }

            const widthResult = this.findNextRange(width, widthRanges);
            const heightResult = this.findNextRange(height, this.heightRanges);

            if (!widthResult || !heightResult) {
                return null;
            }

            return priceTable[heightResult.index][widthResult.index];
        }
    }

    // 創建 PriceDatabase 的單一實例
    const priceDatabase = new PriceDatabase();

    // 將 priceDatabase 實例暴露給全局作用域
    window.priceDatabase = priceDatabase;
})();
