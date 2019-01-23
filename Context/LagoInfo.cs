using System;
using System.Collections.Generic;

namespace core
{
    public partial class LagoInfo
    {
        public int IdLago { get; set; }
        public string InfoIta { get; set; }
        public string InfoEng { get; set; }

        public virtual LagoBasic IdLagoNavigation { get; set; }
    }
}
