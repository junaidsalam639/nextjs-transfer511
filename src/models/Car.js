import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
  gepak: { type: Number, required: true },
  price: { type: Number, required: true },
  features: {
    waitTime: { type: String, default: '60 min Wartezeit (Flughafen)' },
    pickupTime: { type: String, default: '15 min für andere Abholungen' },
    cancellation: { type: String, default: 'Kostenlose Stornierung (24h vorher)' },
    amenities: { type: String, default: 'Gratis WLAN & Wasser' },
    seats: { type: Number, default: 4 },
  },
}, { timestamps: true });

export default mongoose.models.Car || mongoose.model('Car', carSchema);