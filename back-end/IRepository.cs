using System.Collections.Generic;
using System.Threading.Tasks;


public interface IRepository<T>
{
    Task<IEnumerable<T>> GetAll(string sortBy);
    Task<T> Insert(T t);

    Task Delete(int id);
}