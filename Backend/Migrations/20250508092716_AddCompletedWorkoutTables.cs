using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace WorkoutTracker.Migrations
{
    /// <inheritdoc />
    public partial class AddCompletedWorkoutTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompletedExercise_CompletedWorkouts_CompletedWorkoutId",
                table: "CompletedExercise");

            migrationBuilder.DropForeignKey(
                name: "FK_ExerciseSet_CompletedExercise_CompletedExerciseId",
                table: "ExerciseSet");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CompletedExercise",
                table: "CompletedExercise");

            migrationBuilder.RenameTable(
                name: "CompletedExercise",
                newName: "CompletedExercises");

            migrationBuilder.RenameIndex(
                name: "IX_CompletedExercise_CompletedWorkoutId",
                table: "CompletedExercises",
                newName: "IX_CompletedExercises_CompletedWorkoutId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CompletedExercises",
                table: "CompletedExercises",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CompletedSets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CompletedExerciseId = table.Column<int>(type: "integer", nullable: false),
                    Reps = table.Column<int>(type: "integer", nullable: false),
                    Weight = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompletedSets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompletedSets_CompletedExercises_CompletedExerciseId",
                        column: x => x.CompletedExerciseId,
                        principalTable: "CompletedExercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CompletedSets_CompletedExerciseId",
                table: "CompletedSets",
                column: "CompletedExerciseId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedExercises_CompletedWorkouts_CompletedWorkoutId",
                table: "CompletedExercises",
                column: "CompletedWorkoutId",
                principalTable: "CompletedWorkouts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ExerciseSet_CompletedExercises_CompletedExerciseId",
                table: "ExerciseSet",
                column: "CompletedExerciseId",
                principalTable: "CompletedExercises",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompletedExercises_CompletedWorkouts_CompletedWorkoutId",
                table: "CompletedExercises");

            migrationBuilder.DropForeignKey(
                name: "FK_ExerciseSet_CompletedExercises_CompletedExerciseId",
                table: "ExerciseSet");

            migrationBuilder.DropTable(
                name: "CompletedSets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CompletedExercises",
                table: "CompletedExercises");

            migrationBuilder.RenameTable(
                name: "CompletedExercises",
                newName: "CompletedExercise");

            migrationBuilder.RenameIndex(
                name: "IX_CompletedExercises_CompletedWorkoutId",
                table: "CompletedExercise",
                newName: "IX_CompletedExercise_CompletedWorkoutId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CompletedExercise",
                table: "CompletedExercise",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CompletedExercise_CompletedWorkouts_CompletedWorkoutId",
                table: "CompletedExercise",
                column: "CompletedWorkoutId",
                principalTable: "CompletedWorkouts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ExerciseSet_CompletedExercise_CompletedExerciseId",
                table: "ExerciseSet",
                column: "CompletedExerciseId",
                principalTable: "CompletedExercise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
