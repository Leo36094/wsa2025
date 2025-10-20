const fs = require('fs');
const path = require('path');

// Function to calculate the greatest common divisor
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

const flagsDir = path.join(__dirname, '..', 'public', 'images', 'flags');
const constantsPath = path.join(__dirname, '..', 'src', 'components', 'CompetitionCountry', 'constants.ts');

try {
    const files = fs.readdirSync(flagsDir);
    let constantsContent = fs.readFileSync(constantsPath, 'utf-8');

    const flagsRatios = {};

    for (const file of files) {
        if (file.endsWith('.svg') && file.includes('_flag')) {
            const countryCode = file.split('_')[0];
            const filePath = path.join(flagsDir, file);
            const svgContent = fs.readFileSync(filePath, 'utf-8');

            let width, height;
            // Trying to match viewBox="0 0 100 100"
            const viewBoxMatch = svgContent.match(/viewBox="0 0 ([\d\.]+) ([\d\.]+)"/);
            if (viewBoxMatch) {
                width = parseFloat(viewBoxMatch[1]);
                height = parseFloat(viewBoxMatch[2]);
            } else {
                // Trying to match width="100" height="100"
                const widthMatch = svgContent.match(/width="([\d\.]+)"/);
                const heightMatch = svgContent.match(/height="([\d\.]+)"/);
                if (widthMatch && heightMatch) {
                    width = parseFloat(widthMatch[1]);
                    height = parseFloat(heightMatch[1]);
                }
            }

            if (width && height) {
                 // Use precision to handle floating point numbers
                const precision = 100;
                const wInt = Math.round(width * precision);
                const hInt = Math.round(height * precision);

                const divisor = gcd(wInt, hInt);
                const w = wInt / divisor;
                const h = hInt / divisor;

                // Only add if not the default 3/2 ratio
                if (w / h !== 1.5) {
                    flagsRatios[countryCode] = `${w} / ${h}`;
                }
            }
        }
    }

    const countryRegex = /({[^{}]*?code:\s*'([A-Z]{2})'[^}]*?})/g;
    const countryMapRegex = /([A-Z]{2}:\s*{[^}]*?})/g;

    function updateCountry(match, p1, code) {
        const ratio = flagsRatios[code];
        if (ratio && !p1.includes('ratio:')) {
            // Check if there is a trailing comma
            if(p1.trim().endsWith('}')) {
                return p1.replace(/\s*}/, `, ratio: '${ratio}' }`);
            }
            return p1.replace(/}/, `, ratio: '${ratio}' }`);
        }
        return match;
    }

    function updateCountryMap(match) {
        const code = match.substring(0, 2);
        const ratio = flagsRatios[code];
        if (ratio && !match.includes('ratio:')) {
             if(match.trim().endsWith('}')) {
                return match.replace(/\s*}/, `, ratio: '${ratio}' }`);
            }
            return match.replace(/}/, `, ratio: '${ratio}' }`);
        }
        return match;
    }

    constantsContent = constantsContent.replace(countryRegex, updateCountry);
    constantsContent = constantsContent.replace(countryMapRegex, updateCountryMap);

    fs.writeFileSync(constantsPath, constantsContent);
    console.log('constants.ts updated with flag ratios.');

} catch (error) {
    console.error('Error updating flag ratios:', error);
}
