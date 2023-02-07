using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04.Models
{
    //Each string data type includes an integer validation and checks if the number is in a range of 0 to 100
    public class CalculationModel
    {
        [Range(0, 100)]
        public string Assignment { get; set; }
        [Range(0, 100)]
        public string GroupProject { get; set; }
        [Range(0, 100)]
        public string Quiz { get; set; }
        [Range(0, 100)]
        public string Midterm { get; set; }
        [Range(0,100)]
        public string Final { get; set; }
        [Range(0, 100)]
        public string Intex { get; set; }

    }


}
