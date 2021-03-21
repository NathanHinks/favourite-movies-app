using System.Collections.Generic;
using Dapper;
using System.Data;
using System;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

public class MovieRepository : BaseRepository, IRepository<Movie>
{

    public MovieRepository(IConfiguration configuration) : base(configuration) { }



    public async Task<IEnumerable<Movie>> GetAll(string orderBy)
    {
        using var connection = CreateConnection();

        IEnumerable<Movie> Movies = await connection.QueryAsync<Movie>("SELECT * FROM Movies ORDER BY @orderBy;", new {orderBy});

        return Movies;
    }

    public async Task<Movie> Insert(Movie Movie)
    {
        using var connection = CreateConnection();


        return await connection.QuerySingleAsync<Movie>("INSERT INTO Movies (Title, Rating) VALUES (@Title, @Rating) RETURNING *;", Movie);
    }

    public async Task Delete(int id)
    {
        using var connection = CreateConnection();

        await connection.ExecuteAsync("DELETE FROM Movies WHERE Id = @id;", new {id});
    }
}

