import { Alert } from "@mui/material";

export default function ErrorMessage({ refetch }) {
  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" size="small" onClick={refetch}>
          Retry
        </Button>
      }
    >
      Something went wrong. Please try again.
    </Alert>
  );
}
