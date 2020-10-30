using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppAngularCore.Models.Response
{
    public class PostResponse
    {
        public int Estado { get; set; }
        public string Mensaje { get; set; }
        public object Data { get; set; }
    }
}
