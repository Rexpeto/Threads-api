import { connect } from 'mongoose'

// Connect to databases
const dbConect = async (): Promise<void> => {
  const DB_URI = process.env.DB_URI ?? 'mongodb://localhost:27017/threads-api'
  await connect(DB_URI)
}

export default dbConect
