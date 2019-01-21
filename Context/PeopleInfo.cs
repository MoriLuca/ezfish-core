using System;
using System.Collections.Generic;

namespace core
{
    public partial class PeopleInfo
    {
        public int BasicId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Nickname { get; set; }
        public bool? ShowPrivateName { get; set; }

        public virtual PeopleBasic Basic { get; set; }
    }
}
