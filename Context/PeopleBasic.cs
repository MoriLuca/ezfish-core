using System;
using System.Collections.Generic;

namespace core
{
    public partial class PeopleBasic
    {
        public int BasicId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual PeopleInfo PeopleInfo { get; set; }
    }
}
