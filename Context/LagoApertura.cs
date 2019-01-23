using System;
using System.Collections.Generic;

namespace core
{
    public partial class LagoApertura
    {
        public int IdLago { get; set; }
        public int? Lun { get; set; }
        public int? Mar { get; set; }
        public int? Mer { get; set; }
        public int? Gio { get; set; }
        public int? Ven { get; set; }
        public int? Sab { get; set; }
        public int? Dom { get; set; }

        public virtual LagoBasic IdLagoNavigation { get; set; }
    }
}
