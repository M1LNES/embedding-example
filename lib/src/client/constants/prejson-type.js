import { prejson } from '../../../assets/embedding'
const PreJSONType = prejson.PreJSONType

/**
 *  Allowed widget field types.
 */
const BOARD_WIDGET_FIELD_TYPE = {
	STRING: 'string',
	NUMBER: 'number',
	BOOLEAN: 'boolean',
	ENUM: 'enum',
	OBJECT_ENUM: 'object_enum',
	LIST: 'list',
	DATETIME: 'datetime',
	DATERANGE: 'daterange',
	BISTATE: 'bistate',
	SLIDER: 'slider',
	TIMER: 'timer',
}

/**
 *  Map for mapping widget fields into the PreJSONType type.
 */
export const BOARD_WIDGET_FIELD_TYPE_TO_PREJSON_TYPE = {
	[BOARD_WIDGET_FIELD_TYPE.STRING]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.NUMBER]: PreJSONType.Number,
	[BOARD_WIDGET_FIELD_TYPE.BOOLEAN]: PreJSONType.Boolean,
	[BOARD_WIDGET_FIELD_TYPE.ENUM]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.OBJECT_ENUM]: PreJSONType.Object,
	[BOARD_WIDGET_FIELD_TYPE.LIST]: PreJSONType.Array,
	[BOARD_WIDGET_FIELD_TYPE.BISTATE]: PreJSONType.String,
	[BOARD_WIDGET_FIELD_TYPE.DATETIME]: PreJSONType.DateTime,
	[BOARD_WIDGET_FIELD_TYPE.DATERANGE]: PreJSONType.DateRange,
	[BOARD_WIDGET_FIELD_TYPE.SLIDER]: PreJSONType.Number,
	[BOARD_WIDGET_FIELD_TYPE.TIMER]: PreJSONType.Object,
}
