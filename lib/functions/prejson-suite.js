import { prejson, prejsonTime } from '../../assets/embedding'
const PreJSONType = prejson.PreJSONType
const getModifierSpecification = prejson.getModifierSpecification

const prejsonPrevious = getModifierSpecification(
	PreJSONType.DateRange,
	'previous'
).fn
const prejsonPreviousShifted = getModifierSpecification(
	PreJSONType.DateRange,
	'previousShifted'
).fn

/**
 * The following PreJSON relative daterange notations represent presets called "This [unit]".
 * These presets should be handle using modifier `previousShifted` while the rest of ranges using `previous`.
 */
const SPECIAL_PREVIOUS_PRESETS = ['now[sW]/now', 'now[sM]/now', 'now[sY]/now']

/**
 * @type {import("@sbks/prejson").ModifierSpecification<Interval, Interval>}
 */
export const previousSuite = {
	name: 'previousSuite',
	expects: PreJSONType.DateRange,
	returns: PreJSONType.DateRange,
	description:
		"Combines behaviour of 'previous' and 'previousShifted' to meet the rules for creating previous ranges in Suite.",
	fn: (v) => {
		const orig = v[prejsonTime.PreDateRange.ORIGINAL]
		if (!orig || !SPECIAL_PREVIOUS_PRESETS.includes(orig)) {
			return prejsonPrevious(v)
		}
		return prejsonPreviousShifted(v)
	},
}
