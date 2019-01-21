using System;
using System.Collections.Generic;

namespace core
{
    public partial class People
    {
        public int PeopleId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Nickname { get; set; }
        public bool? ShowPrivateName { get; set; }
        public string Photo { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
