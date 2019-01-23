using System;
using System.Collections.Generic;

namespace core
{
    public partial class LagoBasic
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Indirizzo { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public string PreviewImg { get; set; }

        public virtual LagoApertura LagoApertura { get; set; }
        public virtual LagoInfo LagoInfo { get; set; }
    }
}
