using Microsoft.EntityFrameworkCore;
using MyResumee.Model.Entitys;
using MyResumee.Repository.Configuration;

namespace MyResumee.Repository.Context
{
    public class MyResumeeContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public MyResumeeContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
