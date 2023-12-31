/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Router } from 'express'
import { readdirSync } from 'fs'

// ? Path of folder routes
const PATH_ROUTE = `${__dirname}`

// ? Instance router of express
const router = Router()

// ? Clean name of fileName return first name
const cleanName = (fileName: string): string | undefined => {
  return fileName.split('.').shift()
}

// ? Scanner files of folder routes with PATH_ROUTE
readdirSync(PATH_ROUTE).filter((fileName) => {
  const name = cleanName(fileName)

  if (name === 'index') {
    return false
  } else {
    try {
      // Dynamic import
      void import(`./${fileName}`).then((moduleRoute) => {
        router.use(`/api/v1/${name}/`, moduleRoute.router)
        console.log(
          `✔  Load route --> ${name} -> ${
            process.env.IpV4 ?? 'http://localhost'
          }:${process.env.PORT ?? 3000}/api/v1/${name}`,
        )
      })
    } catch (error) {
      console.log(`❌ Error load route --> ${name}`)
      console.log(`${name}`, error)
    }

    return true
  }
})

export default router
