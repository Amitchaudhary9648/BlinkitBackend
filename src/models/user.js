import mongoose, { Schema }  from "mongoose";

//Customer Schema
const customerSchema = new Schema({
    name: {type: String},
    role: {
        type: String,
        enum: ["Customer", "Admin", "Delivery Partner"],
        required: true
    },
    isActivated: {type: Boolean, default: false},
    phone: {type: Number, required: true, unique: true},
    role: {type: String, enum: ["Customer"], default: "Customer"}, 
    liveLocation:{
        latitude: {type: String},
        longitude: {type: String}
    },
    address: {type: String}
})

//Delivery Partner Schema
const deliveryPartnerSchema = new Schema({
    name: {type: String},
    role: {
        type: String,
        enum: ["Customer", "Admin", "Delivery Partner"],
        required: true
    },
    isActivated: {type: Boolean, default: false},
    phone: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: Number, required: true},
    role: {type: String, enum: ["DeliveryPartner"], default: "DeliveryPartner"},
    liveLocation:{
        latitude: {type: String},
        longitude: {type: String}
    },
    address: {type: String},
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch"
    }
})

//Admin Schema
const adminSchema = new Schema({
    name: {type: String},
    role: {
        type: String,
        enum: ["Customer", "Admin", "Delivery Partner"],
        required: true
    },
    isActivated: {type: Boolean, default: false},
    email: {type: String, required: true, unique: true},
    password: {type: Number, required: true},
    role: {type: String, enum: ["Admin"], default: "Admin"},
})

export const Customer = mongoose.model("Customer", customerSchema)
export const DeliveryPartner = mongoose.model("DeliveryPartner", deliveryPartnerSchema)
export const Admin = mongoose.model("Admin", adminSchema)