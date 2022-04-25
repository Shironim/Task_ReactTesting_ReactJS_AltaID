import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
import FormCoding from './screen/FormCoding';

describe('FormCoding', () => {
  // Testing UI Render
  test('renders FormCoding Screen', () => {
    render(<FormCoding />);
    expect(screen.getByText(/Pendaftaran Peserta Coding Bootcamp/)).toBeInTheDocument();

    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();

    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();

    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();

    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();

    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();

    expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument();
  });

  // Testing Input
  test('Input test for Nama Lengkap', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /nama/i }),
      {
        target: { value: "testing" }
      })

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing");

  });
  test('Input test for Email', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /email/i }),
      {
        target: { value: "email@email.com" }
      })

    expect(screen.getByLabelText(/Email:/)).toHaveValue("email@email.com");

  });
  test('Input test for radio button', () => {
    render(<FormCoding />);

    const IT = screen.getByRole('radio', { name: /pendidikan/i });
    fireEvent.click(IT);
    expect(IT).toBeChecked();

  });
  test('Input test for Harapan', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /harapan/i }),
      {
        target: { value: "loremlorem" }
      })

    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("loremlorem");
  });

  // Testing Input if any error
  test('Testing error input Nama Lengkap', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /nama/i }),
      {
        target: { value: "loremlorem1" }
      })

    expect(screen.getByText(/Nama Lengkap Harus Berupa Huruf/)).toBeInTheDocument();
  });
  test('Testing error input email', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /email/i }),
      {
        target: { value: "emailaja" }
      })

    expect(screen.getByText(/Email Tidak Sesuai/)).toBeInTheDocument();
  });

  // Testing Submit Button
  test('Testing Submit Button', () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole('textbox',
      { name: /nama/i }),
      {
        target: { value: "testing" }
      });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing");

    fireEvent.input(screen.getByRole('textbox',
      { name: /email/i }),
      {
        target: { value: "email@email.com" }
      });

    expect(screen.getByLabelText(/Email:/)).toHaveValue("email@email.com");

    const IT = screen.getByRole('radio', { name: /pendidikan/i });
    fireEvent.click(IT);
    expect(IT).toBeChecked()

    fireEvent.input(screen.getByRole('textbox',
      { name: /harapan/i }),
      {
        target: { value: "loremlorem" }
      })

    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("loremlorem");

    fireEvent.click(screen.getByText("Submit"))
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("");
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
    expect(IT).not.toBeChecked()
  });

});

