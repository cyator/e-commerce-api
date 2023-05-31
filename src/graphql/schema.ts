import { builder } from './builder';

import './models/Category'
import './models/Product'

export const schema = builder.toSchema();