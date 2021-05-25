using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CampaignCodes.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CampaignCodesController : ControllerBase
    {

        private static readonly CampaignCode[] CampaignCodeList = new CampaignCode[] {
            new CampaignCode
            {
                Id =1,
                Code = "BS01",
                Description = "Beagle Street"
            },
            new CampaignCode
            {
                Id =2,
                Code = "BL01",
                Description = "Budget"
            }
        };
        
     

        // GET: api/<CampaignCodesController>
        [HttpGet]
        public IEnumerable<CampaignCode> Get()
        {
            return CampaignCodeList.ToArray();
        }

        // GET api/<CampaignCodesController>/5
        [HttpGet("{codeToMatch}")]
        public CampaignCode Get(string codeToMatch)
        {
            CampaignCode foundCampaignCode = new CampaignCode
            {
                Id = 0,
                Code = "",
                Description = ""
            };
            foreach (CampaignCode campaignCode in CampaignCodeList) {
                if (campaignCode.Code == codeToMatch) {
                    foundCampaignCode = campaignCode;
                }  
            }
            return foundCampaignCode;
           
        }

    }
}
