﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectroApp.Controllers
{
    public class Wishlist : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}