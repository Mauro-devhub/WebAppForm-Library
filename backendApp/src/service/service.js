const sql = require('mssql')

const config = {
  user: 'mauricio',
  password: 'mauricio',
  server: 'localhost',
  database: 'biblioteca',
  options: {
    encrypt: true,
    trustServerCertificate: true
  },
};

async function consults(request) {
  return sql.connect(config)
    .then((pool) => {
      console.log('conectado');
      return pool.request()
        .query(request)
        .then(resp => {
          return resp.recordset;
        })
        .catch(err => {
          return err.message;
        })
    })
    .catch(err => {
      return err.message;
    }
  )
}

class ServiceBooks {
  constructor() {
    this.getAllBooks();
  }

  async getAllBooks() {
    return consults('select * from libreria');
  }

  async getOneBook(title) {
    try {
      const pool = await sql.connect(config);
      const query = 'select * from libreria where Titulo = @Titulo';
      const values = {
        Titulo: title
      }
      const result = await pool.request()
        .input('Titulo', sql.VarChar, values.Titulo)
        .query(query)

      return result.recordset[0];
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteBook(id) {
    try {
      const pool = await sql.connect(config);
      const query = 'delete from libreria where ID = @id'
      const values = {
        ID: id
      }
      const result = await pool.request()
        .input('ID', sql.VarChar, values.ID)
        .query(query)

      return result;
    } catch (err) {
      console.log(err.message);
    }
  }

  async createBook(obj) {
    try {
      const pool = await sql.connect(config)
      const query = `insert into libreria(ISBN, Titulo, Autor, Categoria, Editorial, Paginas)
                    values (@ISBN, @Titulo, @Autor, @Categoria, @Editorial, @Paginas)`;

      const values = {
        ISBN: obj.isbn,
        Titulo: obj.titulo,
        Autor: obj.autor,
        Categoria: obj.categoria,
        Editorial: obj.editorial,
        Paginas: String(obj.paginas)
      }

      const result = await pool.request()
        .input('ISBN', sql.VarChar, values.ISBN)
        .input('Titulo', sql.VarChar, values.Titulo)
        .input('Autor', sql.VarChar, values.Autor)
        .input('Categoria', sql.VarChar, values.Categoria)
        .input('Editorial', sql.VarChar, values.Editorial)
        .input('Paginas', sql.VarChar, values.Paginas)
        .query(query);

      return result;
    } catch (error) {
      console.log(error.message);
    }
  }

  // async updateBook() {

  // }

}

module.exports = ServiceBooks;