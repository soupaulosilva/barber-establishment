import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
    value: {
        type: Schema.Types.Number,
        required: true,
    }
})


export default model(CollectionName.JOBS, schema)