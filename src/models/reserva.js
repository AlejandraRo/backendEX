import {Schema,model} from 'mongoose'
const reservaSchema=new Schema({
    nombre:String
},{
    timestamps:true,
    versionKey:false
})

export default model('Reserva',reservaSchema)