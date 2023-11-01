import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
  const [scrolled, setScrolled] = useState(false); // Estado para rastrear se o usuário rolou além do limite.

  useEffect(() => {
    // Função para lidar com o evento de rolagem.
    const handleScroll = () => {
      if (window.scrollY > threshold) { // Verificar se a posição de rolagem é maior que o limite.
        setScrolled(true); // O usuário rolou o suficiente, definir scrolled como verdadeiro.
      } else {
        setScrolled(false); // O usuário não rolou o suficiente, definir scrolled como falso.
      }
    };

    window.addEventListener("scroll", handleScroll); // Adicionar um ouvinte de evento para o evento de rolagem.
    
    // Função de limpeza para remover o ouvinte de evento ao desmontar o componente.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]); // O efeito será executado novamente se o valor de threshold mudar.

  return scrolled; // Retornar o valor de scrolled que indica se o usuário rolou além do limite.
}
