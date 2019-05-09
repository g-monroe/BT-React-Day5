using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Superhero.Controllers
{
    [Route("api/[controller]")]
    public class SuperheroController : Controller
    {
        #region GET
        [HttpGet]
        public List<SuperheroEntity> GetSuperheros()
        {
            return _Superheros;
        }

        [HttpGet("{id}")]
        public SuperheroEntity GetSuperhero(int? id)
        {
            return _Superheros.FirstOrDefault(s => s.Id == id);
        }

        [HttpGet("Planets")]
        public List<SelectOption> GetPlanets()
        {
            return planetsList;
        }

        [HttpGet("Universes")]
        public List<SelectOption> GetUniverses()
        {
            return universesList;
        }

        [HttpGet("Abilities")]
        public List<SelectOption> GetAbilities()
        {
            return abilitiesList;
        }
        #endregion GET

        [HttpPost]
        public SuperheroEntity SaveSuperhero(SuperheroEntity hero)
        {
            hero.Id = GetNewId();
            _Superheros.Add(hero);
            return hero;
        }

        [HttpPut]
        public SuperheroEntity UpdateSuperhero(SuperheroEntity hero)
        {
            int heroindex = hero != null ? _Superheros.FindIndex(h => h.Id == hero.Id) : -1;
            if (heroindex >= 0)
            {
                _Superheros.RemoveAt(heroindex);
                _Superheros.Insert(heroindex, hero);
            }
            return hero;
        }

        [HttpDelete("{id}")]
        public void DeleteSuperhero(int id)
        {
            int heroindex = _Superheros.FindIndex(h => h.Id == id);
            if (heroindex >= 0)
            {
                _Superheros.RemoveAt(heroindex);
            }
        }


        static protected List<SelectOption> planetsList = new List<SelectOption>()
        {
            new SelectOption { Id = 1, Name = "Krypton" },
            new SelectOption { Id = 2, Name = "Xandar" },
            new SelectOption { Id = 3, Name = "Hala" },
            new SelectOption { Id = 4, Name = "Oa" },
            new SelectOption { Id = 5, Name = "Titan" },
            new SelectOption { Id = 6, Name = "Ego" },
            new SelectOption { Id = 7, Name = "Knowhere" }
        };

        static protected List<SelectOption> universesList = new List<SelectOption>() {
            new SelectOption { Id = 1, Name = "Marvel" },
            new SelectOption { Id = 2, Name = "DC" },
            new SelectOption { Id = 3, Name = "Other" }
        };

        static protected List<SelectOption> abilitiesList = new List<SelectOption>() {
            new SelectOption { Id = 1, Name = "Fly" },
            new SelectOption { Id = 2, Name = "Superhuman Strength" },
            new SelectOption { Id = 3, Name = "Energy Absorption" },
            new SelectOption { Id = 4, Name = "Superhuman Speed" },
            new SelectOption { Id = 5, Name = "Superhuman Stamina" },
            new SelectOption { Id = 6, Name = "Superhuman Durability" },
            new SelectOption { Id = 7, Name = "Photographic Memory" },
            new SelectOption { Id = 8, Name = "Superhuman Agility" },
            new SelectOption { Id = 9, Name = "Speed Reading" },
            new SelectOption { Id = 10, Name = "Regenerative Healing" },
            new SelectOption { Id = 11, Name = "Telepathy" },
            new SelectOption { Id = 12, Name = "Terrible Singing" },
            new SelectOption { Id = 13, Name = "Object/Money" },
            new SelectOption { Id = 14, Name = "CSI Zoom Focus" }
        };

        public class SuperheroEntity
        {
            public int? Id { get; set; }
            public string SecretIdentity { get; set; }
            public string HeroName { get; set; }
            public int? Age { get; set; }
            public int? FirstAppearance { get; set; }
            public bool IsAlien { get; set; }
            public string OriginStory { get; set; }
            public string WikiUrl { get; set; }
            public int? PlanetOfOrigin { get; set; }
            public int? Universe { get; set; }
            public List<int> Abilities { get; set; } = new List<int>();
        }

        private static List<SuperheroEntity> _Superheros { get; } = new List<SuperheroEntity>
        {
            new SuperheroEntity()
            {
                Id = 6161962,
                SecretIdentity = "Peter Parker",
                HeroName = "Spider-Man",
                Age = 15,
                FirstAppearance = 1962,
                IsAlien = false,
                OriginStory = "Spider-Man was a genius teenager who was bitten by a radioactive spider, which gave him some spider like abilities including increased strength and agility, the ability to stick to walls, and an extra sense he called his 'spider-sense'. Because of his genius intellect, he was able to create a web-like substance that allows him to swing around New York City.",
                WikiUrl = "https://marvel.fandom.com/wiki/Peter_Parker_(Earth-616)",
                Universe = 1,
                Abilities = new List<int>() { 2, 5, 6, 8 }
            }
        };

        public class SelectOption
        {
            public int Id { get; set; }
            public string Name { get; set; }
        }

        private int GetNewId()
        {
            var random = new Random();
            return random.Next();
        }
    }
}
