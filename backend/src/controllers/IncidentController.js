const connection = require('../database/connection');

module.exports = {
    async index( req, res ){
        //paginacao
        const { page = 1 } = req.query;

        const [count] = await connection('incidents').count();
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'
                ]);

        // retorna no header o total de casos
        res.header('X-Total-Count', count['count(*)']);
        return res.json(incidents);
    },

    async store (req, res){
        const { title, description, value} = req.body;
        const ong_id = req.headers.authorization; // tudo que vale para o contexto Idioma, autentificacao

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        
        return res.json({ id });
    },

    async delete(req, res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
                    .where('id', id)
                    .select('ong_id')
                    .first();
        if (incident.ong_id != ong_id){
            return res.status(401).json({ error: 'Operation not permited'})
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }
}