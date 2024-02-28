/**
 * Parses a JSON string into a JavaScript object.
 * @param {string} str - The JSON string to parse.
 * @returns {object|null} The parsed JavaScript object, or null if the input string is not valid JSON.
 */
export const parseJSON = (str) => {
	try {
		return JSON.parse(str)
	} catch (e) {
		return null
	}
}
