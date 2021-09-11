import {v4} from "uuid";
import {Buffer} from "buffer";

export function generateUUId(): string {
	return Buffer.from(v4().toString().replace(/-/g, ''), 'hex').toString();
}