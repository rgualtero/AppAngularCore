using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppAngularCore.Models;
using AppAngularCore.Models.Response;
using Microsoft.AspNetCore.Mvc;

/*
 * Controlador Metodo Api GET/POST NET.Core 
 */


namespace AppAngularCore.Controllers
{
    //Crea la api con la ruta definida 
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        //Atributo con el contexto que se creo en la clase Models
        private MyDBContext db;

        //Constructor recibe el contexto de la DB y lo asigna al contexto de la clase Models
        public ChatController(MyDBContext context)
        {
            db = context;
        }

        #region Metodo GET RETORNA DATOS
        //Consultar por el route desde POSTMAN [Route("api/[controller]")] https://localhost:44347/api/chat/Mensaje
        [HttpGet("[action]")]
        public IEnumerable<MensajeViewModels> Mensaje()
        {
            List<MensajeViewModels> lst = (from d in db.Mensajes
                                                  select new MensajeViewModels
                                                  {
                                                      Id = d.Id,
                                                      Nombre = d.Nombre,
                                                      Texto = d.Texto
                                                  }).ToList();
            return lst;
        }
        #endregion

        #region Metodo POST INSERT DATOS
        //Consultar por el route desde POSTMAN [Route("api/[controller]")] https://localhost:44347/api/chat/Add
        [HttpPost("[action]")]
        public PostResponse Add([FromBody]MensajeViewModels model)
        {
            //Objeto del tipo clase PostResponse
            PostResponse ObjResponse = new PostResponse();

            try
            {
                //Objeto TblMensaje del tipo tabla DB Mensajes
                Mensajes TblMensaje = new Mensajes();

                TblMensaje.Nombre = model.Nombre;
                TblMensaje.Texto = model.Texto;
                db.Mensajes.Add(TblMensaje);
                db.SaveChanges();
                ObjResponse.Estado = 1;
            }
            catch (Exception ex)
            {
                ObjResponse.Estado = 1;
                ObjResponse.Mensaje = ex.Message;
            }

            return ObjResponse;
        }
        #endregion
    }
}