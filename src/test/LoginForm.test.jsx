import { describe, beforeEach, test, expect, vi, render } from "vitest";
import LoginForm from "../components/LoginForm";

describe("LoginForm", () => {
  let mockPokemons;

  beforeEach(() => {
    mockPokemons = vi.doMock("../hooks/usePokemons", () => ({
      usePokemons: () => ({
        isLoading: false,
        data: [
          { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "Ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
          { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
        ],
      }),
    }));
  });

  test("renders LoginForm component with pokemons data", () => {
    render(<LoginForm pokemons={mockPokemons} />);

    expect(mockPokemons).toHaveBeenCalled();
  });
});
