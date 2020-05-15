using Microsoft.EntityFrameworkCore;
using MyResumee.Model.Entitys;

namespace MyResumee.Repository.Context
{
    public class MyResumeeContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public MyResumeeContext(DbContextOptions options) : base(options)
        {
        }
    }
}
