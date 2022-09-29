using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Test_BE.Data;
using Test_BE.Models;

namespace Test_BE.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly ApplicationDbContext _context;
        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var listofEmployees = _context.Employees.ToList();
            return View(listofEmployees);
        }

        public ActionResult Create()
        {
            return View();
        }
    }
}
