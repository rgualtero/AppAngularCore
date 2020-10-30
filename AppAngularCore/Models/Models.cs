using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AppAngularCore.Models
{
    public class MyDBContext: DbContext
    {
        public MyDBContext (DbContextOptions<MyDBContext> options) : base(options)
        {

        }

        public DbSet<Mensajes> Mensajes { get; set; }
    }

    public class Mensajes
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Texto { get; set; }
    }

}
