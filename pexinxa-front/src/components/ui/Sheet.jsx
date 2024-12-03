import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react"; // Ícone de fechar (opcional)
import PropTypes from 'prop-types';

export const Sheet = ({ children, open, onOpenChange }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      {/* Overlay escuro no fundo */}
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />

      {/* Conteúdo do painel */}
      <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg p-6">
        <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X className="h-6 w-6" />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export const SheetHeader = ({ children }) => (
  <div className="mb-4 border-b pb-4">{children}</div>
);

SheetHeader.propTypes = {
  children: PropTypes.node,
};

export const SheetTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const SheetContent = ({ children }) => (
  <div className="overflow-y-auto">{children}</div>
);

SheetContent.propTypes = {
  children: PropTypes.node,
};

SheetTitle.propTypes = {
  children: PropTypes.node,
};
Sheet.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
};

export default { Sheet, SheetHeader, SheetTitle, SheetContent };
