using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace back_end.Controllers
{
    [ApiController]
    [Route("[controller]s")]
    public class MovieController : ControllerBase
    {
        private readonly IRepository<Movie> _movieRepository;

        public MovieController(IRepository<Movie> movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Movie>> GetAllOrdered(string orderBy = "Title")
        {
            return await _movieRepository.GetAll(orderBy);
        }
       
        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] Movie movie)
        {
            try
            {
                var newMovie = await _movieRepository.Insert(movie);
                return Created($"/movies/{movie.Id}", newMovie);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _movieRepository.Delete(id);
                
                return Ok($"Movie {id} deleted");

            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}