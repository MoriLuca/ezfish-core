using System;
using System.Collections.Generic;

namespace core
{
    public partial class LagoInfo
    {
        public int IdLago { get; set; }
        public string Info { get; set; }
        public string Lang { get; set; }

        public virtual LagoBasic IdLagoNavigation { get; set; }
    }
}
