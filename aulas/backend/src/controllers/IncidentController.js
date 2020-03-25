const connection = require('../database/connection') //cria conexao com o DB

module.exports = {
  
  async index(request, response) {
    const { page = 1 } = request.query

    const [count] = await connection('incidents').count()
    console.log(count)

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)               // ajustes para fazer
      .offset((page -1 ) * 5) // paginação dos incidentes
      // .select('*')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ])

    response.header('X-Total-Count', count['count(*)' ])
  
    return response.json(incidents)
  },
  
  async create(request, response) {
    // { Destructuring assignment }
    const { title, description, value } = request.body
    const ong_id = request.headers.authorization
    
    // const result = await connection('incidents').insert({
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return response.json({ id })
  },

  async delete(request, response) {
    // { usando destructuring}
    const { id } = request.params
    const ong_id = request.headers.authorization
    
    // const result = await connection('incidents').insert({
    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first()


    if(incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permited.' })
    }
    
    await connection('incidents').where('id', id).delete()
    
    return response.status(204).send()
  }
}