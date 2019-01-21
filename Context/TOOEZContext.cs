using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace core
{
    public partial class TOOEZContext : DbContext
    {
        public TOOEZContext()
        {
        }

        public TOOEZContext(DbContextOptions<TOOEZContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Dbg> Dbg { get; set; }
        public virtual DbSet<PeopleBasic> PeopleBasic { get; set; }
        public virtual DbSet<PeopleInfo> PeopleInfo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("Server=localhost;Database=TOOEZ;User=luca;Password=0000;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dbg>(entity =>
            {
                entity.ToTable("DBG");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.DateTime)
                    .HasColumnName("DATE_TIME")
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("'CURRENT_TIMESTAMP'")
                    .ValueGeneratedOnAddOrUpdate();

                entity.Property(e => e.Info)
                    .HasColumnName("INFO")
                    .HasColumnType("text");

                entity.Property(e => e.InnerException)
                    .HasColumnName("INNER_EXCEPTION")
                    .HasColumnType("text");

                entity.Property(e => e.Message)
                    .HasColumnName("MESSAGE")
                    .HasColumnType("text");

                entity.Property(e => e.Object)
                    .HasColumnName("OBJECT")
                    .HasColumnType("varchar(30)");

                entity.Property(e => e.State)
                    .HasColumnName("STATE")
                    .HasColumnType("tinyint(1)");
            });

            modelBuilder.Entity<PeopleBasic>(entity =>
            {
                entity.HasKey(e => e.BasicId)
                    .HasName("PRIMARY");

                entity.ToTable("PEOPLE_BASIC");

                entity.HasIndex(e => e.Email)
                    .HasName("EMAIL")
                    .IsUnique();

                entity.Property(e => e.BasicId)
                    .HasColumnName("BASIC_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasColumnType("varchar(64)");
            });

            modelBuilder.Entity<PeopleInfo>(entity =>
            {
                entity.HasKey(e => e.BasicId)
                    .HasName("PRIMARY");

                entity.ToTable("PEOPLE_INFO");

                entity.HasIndex(e => e.Nickname)
                    .HasName("NICKNAME")
                    .IsUnique();

                entity.Property(e => e.BasicId)
                    .HasColumnName("BASIC_ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Nickname)
                    .HasColumnName("NICKNAME")
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.ShowPrivateName)
                    .HasColumnName("SHOW_PRIVATE_NAME")
                    .HasColumnType("bit(1)");

                entity.Property(e => e.Surname)
                    .HasColumnName("SURNAME")
                    .HasColumnType("varchar(50)");

                entity.HasOne(d => d.Basic)
                    .WithOne(p => p.PeopleInfo)
                    .HasForeignKey<PeopleInfo>(d => d.BasicId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PEOPLE_INFO_ibfk_1");
            });
        }
    }
}
