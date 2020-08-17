using Microsoft.AspNetCore.Mvc;
using MyResumee.Model.Entitys;
using System;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace MyResumee.Controller
{
    [Route("api/Controller")]
    public class LoginController: ControllerBase
    {
        public ActionResult Login([FromBody] User user)
        {
            try
            {
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
