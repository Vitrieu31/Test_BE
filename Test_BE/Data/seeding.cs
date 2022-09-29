using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;
using Test_BE.Models;

namespace Test_BE.Data
{
    public static class seeding
    {
        public static void Seeding_data(this ModelBuilder modelBuilder)
        {
            Random random = new Random();

            List<Employee> ListManage = new();


            for (int i = 0; i < 30; i++)
            {
                Employee listEmp = new Employee()
                {
                    Id = i + 1,
                    Address = "Address " + i,
                    Name = "Name " + i,
                    Email = "Email" + i + "@BeSolution.com.vn",
                    Phone = "0123456789" + i,
                };
                ListManage.Add(listEmp);
            }

            foreach (Employee temp in ListManage)
            {
                modelBuilder.Entity<Employee>().HasData(temp);
            }
        }
    }
}
