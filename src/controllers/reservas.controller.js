import Reserva from '../models/reserva'
export const crearReserva=async(req,res)=> {
    const {nombre}=req.body
    const reservaNueva=new Reserva({nombre})
    const reservaSaved=await reservaNueva.save()
    res.status(201).json(reservaSaved)

}
export const getReservas=async(req,res)=> {
    const reservas=await Reserva.find();
    res.status(200).json(reservas)
}
export const getReservaId=(req,res)=> {s
    
}
export const updateReservaId=(req,res)=> {
    
}
export const aprobarReserva=async(req,res)=>{
    const reservas=await Reserva.find();
    res.status(200).json("Reservas aprobadas")
}

