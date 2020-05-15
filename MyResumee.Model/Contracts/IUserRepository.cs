using MyResumee.Model.Entitys;

namespace MyResumee.Model.Contracts
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User GetUser(string email, string password);
    }
}
