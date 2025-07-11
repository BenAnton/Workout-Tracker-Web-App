using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkoutTracker.Migrations
{
    /// <inheritdoc />
    public partial class FixWorkoutUserRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workouts_AspNetUsers_userId",
                table: "Workouts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Workouts");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Workouts",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Workouts_userId",
                table: "Workouts",
                newName: "IX_Workouts_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Workouts_AspNetUsers_UserId",
                table: "Workouts",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workouts_AspNetUsers_UserId",
                table: "Workouts");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Workouts",
                newName: "userId");

            migrationBuilder.RenameIndex(
                name: "IX_Workouts_UserId",
                table: "Workouts",
                newName: "IX_Workouts_userId");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Workouts",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Workouts_AspNetUsers_userId",
                table: "Workouts",
                column: "userId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
