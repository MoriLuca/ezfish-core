using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography;
using System.Security.Cryptography;
using System.Text;


namespace core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetLakesInfo : ControllerBase
    {

        private readonly Services.Db.Users _usersDb;
        private readonly Services.Lakes.LakesInfo _lakesInfo;

        public GetLakesInfo(
            Services.Db.Users userDb,
            Services.Lakes.LakesInfo lakesInfo
            ){
            this._usersDb = userDb;
            this._lakesInfo = lakesInfo;
        }

        [HttpGet]
        public JsonResult Get ()
        {
            _lakesInfo.GetLakes();
            // List<Models.Lakes.LakesInfo> Laghi = new List<Models.Lakes.LakesInfo>();
            // Laghi.Add(new Models.Lakes.LakesInfo(){
            //     id = 2,
            //     nome = "muretto",
            //     giornoDiApertura = new int[]{1,1,1,1,1,0,2},
            //     indirizzo = "via del muretto",
            //     email = "email@laghetto.it",
            //     telefono = "0235326",
            //     info = new string[] {"pesci","fish"},
            //     prewievImg = "../../../assets/media/LaFametta.svg"


            // });
            // Laghi.Add(new Models.Lakes.LakesInfo(){
            //     id = 2,
            //     nome = "muretto2",
            //     giornoDiApertura = new int[]{0,0,1,2,2,2,2},
            //     indirizzo = "via del muretto",
            //     email = "email@laghetto.it",
            //     telefono = "0235326",
            //     info = new string[] {"pesci","fish"},
            //     prewievImg = "../../../assets/media/lago.svg"


            // });
            return new JsonResult(1);
        }

    }
}
