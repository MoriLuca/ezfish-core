using System;
using System.Security.Cryptography;
using System.Text;
using System.Linq;
using core;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Services.Lakes {

    public partial class LakesInfo
    {
        
        public List<Models.ToNg.LakesInfo> GetLakes(){
            
            List<core.LagoBasic> res = null;
            int result = 0;
            string errorMessage = "";
            string errorInnerException = "";
            //test inserimento nuova persona
            
            using (var context = new TOOEZContext())
            {
                res = context.LagoBasic
                    .Include(a=>a.LagoApertura)
                    .Include(i=>i.LagoInfo)
                    .ToList();
            }

            if (res != null){
                return new List<Models.ToNg.LakesInfo>();
            }
            else{
                throw new NotImplementedException();
                return null;
            }

        }
    }

}