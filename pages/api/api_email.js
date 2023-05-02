import { PrismaClient } from '@prisma/client'

export default async function saveData(req, res) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient()
    const {email} = req.body
    console.log(req.body)
    const user = await prisma.user.create({
      data: {
        email
      },
    })
    res.json({ user })
 } else{
  res.status(405).send('Mensagem: Metodo privado')
 }
}